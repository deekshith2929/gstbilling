function calculate(){
    localStorage.setItem("fromdate",document.getElementById("fromdate").value);
    localStorage.setItem("todate",document.getElementById("todate").value);
    for(var i=1;i<21;i++){
    localStorage.setItem("products"+i,document.getElementById("products"+i).value);
    localStorage.setItem("productstext"+i,document.getElementById("productstext"+i).value);
    localStorage.setItem("opbalance"+i,document.getElementById("opbalance"+i).value);
    localStorage.setItem("recp"+i,document.getElementById("recp"+i).value);
    localStorage.setItem("sales"+i,document.getElementById("sales"+i).value);
    }
}