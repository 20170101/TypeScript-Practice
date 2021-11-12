class PrinterClass{
    doPrint():void{
        console.log('父类的doPrint方法');
    }
}

class StringPrinter extends PrinterClass{
    doPrint():void{
        super.doPrint();
        console.log('子类的doPrint方法')
    }
}

var obj=new StringPrinter();
obj.doPrint();