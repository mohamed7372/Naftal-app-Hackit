class User{
 // late String id_User;
  late String User_Name;
  late String mdp;
  late String NumeroTel;
  late String email;
 // late List <Facture> fact;
//  late List <Reservation> resrv;

  User({required this.User_Name,required this.email,required this.NumeroTel,required this.mdp});

  factory User.fromJson(Map<String, dynamic> responseData) {
    return User(
        mdp: responseData['mdp'],
        User_Name: responseData['UserName'],
        email: responseData['email'],
        NumeroTel: responseData['NumeroTel'],

    );
  }

}


class Compte{
  late String valeur;
  late String mdp;
  late String NumeroTek;

}
class Facture{
  late String code_facture;
  late String quantite;
  late String date;
  late String QrCode;
  late int pompe;
  late User user;

}

class Reservation{
  late String code_Reservation;
  late String quantite;
  late String date;
  late String station;
  late String  positiongps;
  late User user;




}