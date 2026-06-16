package FactoryMethodPatternExample;
public class FactoryTest {

    public static void main(String[] args) {

        DocumentFactory word = new WordFactory();
        word.openDocument();

        DocumentFactory pdf = new PdfFactory();
        pdf.openDocument();

        DocumentFactory excel = new ExcelFactory();
        excel.openDocument();
    }
}