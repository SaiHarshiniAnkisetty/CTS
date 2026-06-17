using System;

namespace FinancialForecasting
{
    class Program
    {
        // Recursive Method
        static double PredictFutureValue(
            double currentValue,
            double growthRate,
            int years)
        {
            // Base Case
            if (years == 0)
                return currentValue;

            // Recursive Call
            return PredictFutureValue(
                currentValue * (1 + growthRate),
                growthRate,
                years - 1);
        }

        static void Main(string[] args)
        {
            Console.Write("Enter current value: ");
            double current =
                Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter growth rate (%): ");
            double rate =
                Convert.ToDouble(Console.ReadLine()) / 100;

            Console.Write("Enter years: ");
            int years =
                Convert.ToInt32(Console.ReadLine());

            double future =
                PredictFutureValue(
                    current,
                    rate,
                    years);

            Console.WriteLine(
                "\nPredicted Future Value = "
                + future);

            Console.ReadLine();
        }
    }
}
