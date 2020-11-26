import 'package:flutter/material.dart';

import '../constants.dart';

class SearchContainer extends StatelessWidget {
  const SearchContainer({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: kTextWhiteColor,
        borderRadius: BorderRadius.circular(50),
      ),
      child: TextField(
        maxLength: 30,
        onChanged: (val) {},
        decoration: InputDecoration(
          border: OutlineInputBorder(
              // width: 0.0 produces a thin "hairline" border
              borderRadius: BorderRadius.all(Radius.circular(90.0)),
              //borderSide: BorderSide(color: Colors.white24)
              borderSide: const BorderSide(),
              ),
          suffixIcon: Icon(Icons.search),
          labelText: "Búsqueda...",
        ),
      ),
    );
  }
}
