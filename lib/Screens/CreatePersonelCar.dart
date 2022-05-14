import 'package:flutter/material.dart';
import 'package:naftal/Classes/CarClass.dart';
import 'package:naftal/Screens/MainPage.dart';
class CreatePersonelCar extends StatefulWidget {

  @override
  State<CreatePersonelCar> createState() => _CreatePersonelCarState();
}

class _CreatePersonelCarState extends State<CreatePersonelCar> {
  @override
  List<DropdownMenuItem<String>> get dropdownItems{
    List<DropdownMenuItem<String>> menuItems = [
      const DropdownMenuItem(child: Text("Gaz"),value: "Gaz"),
      const DropdownMenuItem(child: Text("Mazote"),value: "Mazote"),
      const DropdownMenuItem(child: Text("Essence"),value: "Essence"),

    ];
    return menuItems;
  }

  String selectedValue = "Gaz";
TextEditingController name=TextEditingController();
TextEditingController tank=TextEditingController();
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,

      appBar: AppBar(backgroundColor: Colors.white,
      title: Text("Create A personnel Car",style: TextStyle(color: Colors.black),),
      shadowColor: Colors.transparent,


      ),
      body: Padding(
        padding: const EdgeInsets.only(top: 30.0,right: 15,left: 15),
        child: Column(
          children:  <Widget>[

             Padding(
              padding: const EdgeInsets.only(top: 10),
              child: TextField(
                controller: name,
              //  obscureText: true,
                decoration: InputDecoration(
                    border: const OutlineInputBorder(),
                    labelText: 'Car Name',
                   // hintText: 'Enter your email'
                ),
              ),
            ),
            const SizedBox(height: 20,),
             Padding(
              padding: const EdgeInsets.only(top: 10),
              child:  TextField(
                controller: tank,
              //  obscureText: true,
                decoration: InputDecoration(
                    border:  OutlineInputBorder(),
                    labelText: 'Tank Capacity',
                    //hintText: 'Enter your email'
                ),
              ),
            ),
            const SizedBox(height: 20,),
            Container(
              height: 50,
              width: double.infinity,
              child: DropdownButton(

                  value: selectedValue,
                  onChanged: (String? newValue){
                    setState(() {
                      selectedValue = newValue!;
                    });
                  },
                  items: dropdownItems
              ),
            ),
            SizedBox(height: 100,),
            Padding(
              padding: const EdgeInsets.all(10.0),
              child: Center(
                child: Container(
                  decoration: const BoxDecoration(
                    borderRadius: BorderRadius.all(Radius.circular(10)),
                    color: Color(0xff667EA3),
                  ),
                  width: double.infinity,
                  height: 60.0,
                  child: Center(
                    child: GestureDetector(
                      onTap: () {
                        cr.add(car(name: name.text, pitrole:selectedValue , type:tank.text ));
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context) => MainPage()),
                        );
                      },
                      child: const Text("Create",style: TextStyle(color:Colors.white,fontSize: 20,fontWeight: FontWeight.bold),),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
