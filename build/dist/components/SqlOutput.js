import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
import {Paper} from "../../_snowpack/pkg/@material-ui/core.js";
import SyntaxHighlighter from "../../_snowpack/pkg/react-syntax-highlighter.js";
import {atelierForestDark} from "../../_snowpack/pkg/react-syntax-highlighter/dist/esm/styles/hljs.js";
function SqlOutput({columnData}) {
  const [sqlString, setSqlString] = useState("");
  useEffect(() => {
    if (JSON.stringify(columnData) !== "{}") {
      let sqlstring = `
Create or Replace ${columnData.TableName}(
${createcolumns(columnData.Columns)}
${createPrimaryKeys(columnData.Columns, columnData.TableName)}${createUniqueKeys(columnData.Columns, columnData.TableName)}
)

RCDFMT ${columnData.TableName.replace(/.$/, "F")}; 

Label on Column ${columnData.TableName}
(
${createDescription(columnData.Columns)}

);

Label on TABLE ${columnData.TableName} IS '${columnData.TableDescription}';
 `;
      setSqlString(sqlstring);
    }
  }, [columnData]);
  const createcolumns = (columns) => {
    let columnstrings = "";
    columns.forEach((column, index) => {
      columnstrings += `${column.columnName}  for column  ${column.shortName} ${column.dataType}${column.dataSize ? "(" + column.dataSize + ")" : ""} NOT NULL ${column.primaryKey ? "with generetad always as identity" : "DEFAULT"},
`;
    });
    return columnstrings;
  };
  const createPrimaryKeys = (columns, tableName) => {
    const numberofprimarykeys = columns.filter((column) => column.primaryKey === true).length;
    let primaryKeys = "";
    if (numberofprimarykeys == 1) {
      return primaryKeys;
    }
    if (numberofprimarykeys == 1) {
      const SinglePrimaryKey = columns.filter((column) => {
        return column.primaryKey === true;
      })[0];
      primaryKeys = `constraint PK_${tableName} PRIMARY KEY (${SinglePrimaryKey.columnName})${columns.filter((column) => column.uniqueKey === true).length == 0 ? "" : ","}`;
      return primaryKeys;
    }
    if (numberofprimarykeys != 1) {
      const MultiplePrimaryKeys = columns.filter((column) => {
        return column.primaryKey == true;
      });
      let KeysStrings = MultiplePrimaryKeys.map((Primarykey) => Primarykey.columnName).join(", ");
      primaryKeys = `constraint PK_${tableName} PRIMARY KEY (${KeysStrings})${columns.filter((column) => column.uniqueKey === true).length == 0 ? "" : ","}
`;
      return primaryKeys;
    }
  };
  const createUniqueKeys = (columns, tableName) => {
    const numberofUniqueKeys = columns.filter((column) => column.uniqueKey === true).length;
    let uniqueKeys = "";
    if (numberofUniqueKeys == 0) {
      return uniqueKeys;
    }
    if (numberofUniqueKeys == 1) {
      const singleUniqueKey = columns.filter((column) => {
        return column.uniqueKey === true;
      })[0];
      uniqueKeys = `constraint PK_${tableName} UNIQUE KEY (${singleUniqueKey.columnName})
`;
      return uniqueKeys;
    }
    if (numberofUniqueKeys != 1) {
      const MultipleUniqueKeys = columns.filter((column) => {
        return column.uniqueKey == true;
      });
      let KeysStrings = MultipleUniqueKeys.map((uniqueKey) => uniqueKey.columnName).join(", ");
      uniqueKeys = `constraint PK_${tableName} UNIQUE KEY (${KeysStrings})
`;
      return uniqueKeys;
    }
  };
  const createDescription = (columns) => {
    let columnDescription = "";
    columns.forEach((column, index) => {
      columnDescription += `${column.columnName}  Text Is  '${column.description}'${index == columns.length - 1 ? "" : ",\n"}`;
    });
    return columnDescription;
  };
  return /* @__PURE__ */ React.createElement(Paper, {
    style: {
      padding: 16,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      margin: "5%"
    }
  }, /* @__PURE__ */ React.createElement(SyntaxHighlighter, {
    language: "sql",
    style: atelierForestDark,
    showLineNumbers: true
  }, sqlString));
}
export default SqlOutput;
