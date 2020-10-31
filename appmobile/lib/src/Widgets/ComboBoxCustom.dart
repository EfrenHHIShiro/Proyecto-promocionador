import 'package:appmobile/models/typeRequest.dart';
import 'package:flutter/material.dart';

import '../constants.dart';

class ComboBoxCustom extends StatefulWidget {
  final String text;
  final List<TypeRequest> list;

  ComboBoxCustom({
    Key key,
    @required this.text,
    @required this.list,
  }) : super(key: key);

  @override
  _ComboBoxCustomState createState() => _ComboBoxCustomState();
}

class _ComboBoxCustomState extends State<ComboBoxCustom> {
  TypeRequest _selectedValue;
  String _dropdownValue = 'Seleccione una Opción';

  TextEditingController textController;

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Container(
        width: size.width * 0.8,
        decoration: BoxDecoration(
            color: kTextfieldColor, borderRadius: BorderRadius.circular(50.0)),
        margin: EdgeInsets.only(bottom: 80, top: 40),
        padding: EdgeInsets.symmetric(horizontal: 25, vertical: 5),
        child: DropdownButton<TypeRequest>(
          hint: Text(
            _dropdownValue,
            style: TextStyle(color: kPrimaryColor),
          ),
          value: _selectedValue,
          elevation: 16,
          icon: Icon(
            Icons.arrow_drop_down,
            size: 30.0,
          ),
          style: TextStyle(
            color: kTextWhiteColor,
            fontSize: 20,
          ),
          underline: Container(
            height: 0,
          ),
          onChanged: (TypeRequest newValue) {
            setState(() {
              _selectedValue = newValue;
            });
          },
          items: widget.list
              .map((item) => DropdownMenuItem<TypeRequest>(
                    value: item,
                    child: Text(
                      item.name,
                      style: TextStyle(color: kPrimaryColor),
                    ),
                  ))
              .toList(),
        ));
  }
}
