
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Payment{
  late String ic;
  late String Name;
  Payment({required this.ic,required this.Name});

}

List<Payment> pay=[

  Payment(ic: "https://www.nticweb.com/images/ntic2/baridimob.jpg", Name: 'Baridi Mob'),
  Payment(ic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBGdCnbeQ2Agc2tMqbjxhyyZdOkD_BLRN6w&usqp=CAU", Name: 'Naftal Cash'),
  Payment(ic: "https://i2.wp.com/www.millereponses.com/wp-content/uploads/2011/10/cib-en-algerie.jpg?fit=166%2C166&ssl=1", Name: 'CIB Method'),
];