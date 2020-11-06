import 'package:flutter/material.dart';

import '../constants.dart';

class SearchContainer extends StatelessWidget {
  const SearchContainer({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(
        Icons.search,
        color: kPrimaryColor,
      ),
      title: TextField(
        decoration: InputDecoration(
          hintText: "Encontrar Bares",
          border: InputBorder.none,
        ),
      ),
      trailing: Icon(
        Icons.filter_list,
        color: kPrimaryColor,
      ),
    );
  }
}
