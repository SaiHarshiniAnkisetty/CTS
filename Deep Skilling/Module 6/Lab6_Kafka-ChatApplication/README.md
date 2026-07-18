# Kafka Chat Application

## Description
A Windows Forms Chat Application developed using Apache Kafka and C# (.NET 8).

## Technologies Used
- C#
- .NET 8
- Windows Forms
- Apache Kafka
- Confluent.Kafka NuGet Package

## Features
- Send messages using Kafka Producer.
- Receive messages using Kafka Consumer.
- Real-time communication between multiple Windows Forms instances.

## Prerequisites
- .NET 8 SDK
- Apache Kafka
- Java 17+

## Steps to Run
1. Start the Kafka broker.
2. Create the topic `chat-topic`.
3. Open the project in Visual Studio.
4. Build and run the application.
5. Open another instance of the application to test chat.

## Output
Two Windows Forms applications communicate through the Kafka topic `chat-topic`.
