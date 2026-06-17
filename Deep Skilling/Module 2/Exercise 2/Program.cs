using System;

namespace EcommerceSearchExample
{
    class Program
    {
        // Linear Search
        static Product LinearSearch(Product[] products, int id)
        {
            foreach (Product p in products)
            {
                if (p.ProductId == id)
                    return p;
            }

            return null;
        }

        // Binary Search
        static Product BinarySearch(Product[] products, int id)
        {
            int left = 0;
            int right = products.Length - 1;

            while (left <= right)
            {
                int mid = (left + right) / 2;

                if (products[mid].ProductId == id)
                    return products[mid];

                if (products[mid].ProductId < id)
                    left = mid + 1;
                else
                    right = mid - 1;
            }

            return null;
        }

        static void Main(string[] args)
        {
            Product[] products =
            {
                new Product(101,"Laptop","Electronics"),
                new Product(102,"Phone","Electronics"),
                new Product(103,"Shoes","Fashion"),
                new Product(104,"Watch","Accessories"),
                new Product(105,"Tablet","Electronics")
            };

            Console.Write("Enter Product ID to search: ");

            int searchId =
                Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("\nLinear Search:");

            Product result1 =
                LinearSearch(products, searchId);

            if (result1 != null)
                result1.Display();
            else
                Console.WriteLine("Product Not Found");

            Console.WriteLine("\nBinary Search:");

            Product result2 =
                BinarySearch(products, searchId);

            if (result2 != null)
                result2.Display();
            else
                Console.WriteLine("Product Not Found");

            Console.ReadLine();
        }
    }
}
