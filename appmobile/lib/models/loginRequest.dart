import 'dart:io';

import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';


Future<LoginResponse> loginState(String username, String password) async {
  
  final http.Response response = await http
      .post('http://192.168.0.5:8080/auth/LoginUser/', //la ip de su servidor local dentro de su red, para evitar errores
      headers: {
        HttpHeaders.contentTypeHeader: 'application/json'
      },
   body: jsonEncode(<String, String>{
    'email': username,
    'password': password,
  }),);
  

  if (response.statusCode == 201) {
    print(response.body);
    return LoginResponse.fromJson(json.decode(response.body));
  } else {
    print("Error");
  }
}

class LoginResponse {
  String id;
  String email;
  String password;
  bool status;
  LoginResponse({this.id,this.email, this.password,this.status});

  LoginResponse.fromJson(Map<String, dynamic> json) {
    id = json['ID'];
    email = json['Email'];
    password = json['Password'];
    status = json['Status'];
  }
}
