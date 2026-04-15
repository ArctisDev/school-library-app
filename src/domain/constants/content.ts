import { AppDetails, AppFeature, AwardDetails } from "../entities/types";

export const APP_DETAILS: AppDetails = {
  name: "Sistema de Gestão de Bibliotecas",
  version: "1.0.0",
  lastUpdated: "Maio de 2026",
  windowsDownloadUrl: "#download-windows", 
};

export const APP_FEATURES: AppFeature[] = [
  {
    id: "f1",
    title: "Gestão de Alunos",
    description: "Cadastre alunos com informações detalhadas (e-mail, telefone, série) e visualize todos em uma lista organizada.",
    iconName: "users",
  },
  {
    id: "f2",
    title: "Catálogo e Código de Barras",
    description: "Registre livros facilmente usando leitor de código de barras. Categorize por tema, autor e distribuidora.",
    iconName: "barcode",
  },
  {
    id: "f3",
    title: "Controle de Empréstimos",
    description: "Sistema inteligente que permite 1 livro por aluno com duração de 1 semana, garantindo a rotatividade do acervo.",
    iconName: "book-check",
  },
  {
    id: "f4",
    title: "Reservas de Livros",
    description: "Permita que os alunos reservem títulos concorridos antecipadamente.",
    iconName: "bookmark",
  },
  {
    id: "f5",
    title: "Sistema de Notificações",
    description: "Avisos automáticos sobre prazos de devolução, atrasos e disponibilidade de reservas.",
    iconName: "bell",
  },
];

export const AWARD_DETAILS: AwardDetails = {
  title: "Projeto de Destaque em Inovação Educacional",
  organization: "Secretaria de Educação de MG",
  description: "Reconhecimento pelo impacto na modernização da gestão escolar e incentivo à leitura.",
  year: 2026,
};