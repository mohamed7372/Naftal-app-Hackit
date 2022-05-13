import 'package:flutter/material.dart';
import 'package:google_nav_bar/google_nav_bar.dart';

import 'package:google_fonts/google_fonts.dart';
import 'package:flutter_icons/flutter_icons.dart';
import 'package:naftal/Screens/HomePage.dart';
import 'package:naftal/Screens/reserve.dart';

import 'package:typicons_flutter/typicons_flutter.dart';



class MainPage extends StatefulWidget {

  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {

  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  int _selectedIndex = 0;
  final List<Widget> _pages = [
  HomePage(),
  Reserve(),
  HomePage(),
  HomePage(),
  HomePage(),




    //Center(child: Text('New Appointment')),
    // UserProfile(),
  ];





  String shortcut = "no action set";

  @override
  void initState() {
    super.initState();
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(

      color:  const Color(0xffF2F2F2),
      child: Scaffold(
        backgroundColor:  const Color(0xffF2F2F2),
        key: _scaffoldKey,
        body: _pages[_selectedIndex],
        bottomNavigationBar: Container(
          decoration: const BoxDecoration(
            color:  Color(0xffF2F2F2),
            borderRadius: BorderRadius.only(
              topLeft: Radius.circular(50),
              topRight: Radius.circular(50),
            ),
            boxShadow: [
              BoxShadow(

                blurRadius: 20,
                color: Colors.transparent,
              ),
            ],
          ),
          child: SafeArea(
            child: Padding(

              padding:
              const EdgeInsets.symmetric(horizontal: 10.0, vertical: 8),
              child: GNav(
                backgroundColor: const Color(0xffF2F2F2),
                curve: Curves.easeOutExpo,
                rippleColor: Colors.grey,
                hoverColor: Colors.grey,
                haptic: true,
                tabBorderRadius: 20,
                gap: 5,
                activeColor: Colors.red,
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                duration: const Duration(milliseconds: 400),
                tabBackgroundColor:  Colors.white,
                textStyle: GoogleFonts.lato(
                  color: Colors.black,
                ),
                tabs: [
                  GButton(
                    iconColor: Colors.black,
                    iconSize: _selectedIndex != 0 ? 28 : 25,
                    icon: _selectedIndex == 0
                        ?  Icons.charging_station
                        : Icons.charging_station,
                    text: '',

                  ),
                  const GButton(
                      icon:  Icons.surround_sound,
                      text: '',
                      iconColor: Colors.black
                  ),

                  GButton(
                    iconColor: Colors.black,
                    iconSize: 29,
                    icon: _selectedIndex == 3
                        ? Icons.car_repair
                        : Icons.car_repair_outlined,
                    text: '',
                  ),
                  GButton(
                    iconColor: Colors.black,
                    iconSize: 29,
                    icon: _selectedIndex == 3
                        ?Icons.bar_chart
                        : Icons.bar_chart,
                    text: '',
                  ),
                  GButton(
                    iconColor: Colors.black,
                    iconSize: 29,
                    icon: _selectedIndex == 3
                        ? Icons.supervised_user_circle
                        : Icons.supervised_user_circle,
                    text: '',
                  ),
                ],
                selectedIndex: _selectedIndex,
                onTabChange: _onItemTapped,
              ),
            ),
          ),
        ),
      ),
    );
  }

}

