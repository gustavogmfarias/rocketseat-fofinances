import React, { useEffect } from "react";
import { Container, Header, Title } from "./styles";
import { HistoryCard } from "../../components/HistoryCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { categories } from "../../utils/categories";

export interface TransactionData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

export function Resume() {
  async function loadData() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expenses = responseFormatted.filter(
      (expense: TransactionData) => expense.type === "negative"
    );

    const totalByCategory = [];

    categories.forEach((category) => {
      let categorySum = 0;
      expenses.forEach((expense: TransactionData) => {
        if (expense.category === category.key) {
          categorySum += Number(expense.amount);
        }
      });

      if (categorySum > 0) {
        totalByCategory.push({
          name: category.name,
          total: categorySum,
        });
      }
    });

    console.log(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo</Title>
      </Header>
      <HistoryCard title="Compras" amount="R$150.00" color="red" />
    </Container>
  );
}
