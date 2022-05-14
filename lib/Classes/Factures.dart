

class Factures {
  late String name;
  late String prix;
  late String litre;
  late String date;

Factures({required this.name,required this.date,required this.litre,required this.prix});
}

List<Factures> facts=[
  Factures(name: "alger", date: "13/05/222", litre: "20", prix: "2000"),
  Factures(name: "beni mouhli", date: "15/05/222", litre: "20", prix: "2000"),
  Factures(name: "bejaia ", date: "19/05/222", litre: "20", prix: "2000"),

];
