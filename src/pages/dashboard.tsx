import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enable: false,
      },
      foreColor: theme.colors.gray[50],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2021-04-03T00:00:00.000Z',
        '2021-04-04T00:00:00.000Z',
        '2021-04-05T00:00:00.000Z',
        '2021-04-06T00:00:00.000Z',
        '2021-04-07T00:00:00.000Z',
        '2021-04-08T00:00:00.000Z',
        '2021-04-09T00:00:00.000Z',
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      }
    }
  };
  const series = [{ name: "series1", data: [31, 120, 10, 28, 51, 18, 109] }];

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p={["2","8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text>Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={["2","8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text>Taxa de Abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
