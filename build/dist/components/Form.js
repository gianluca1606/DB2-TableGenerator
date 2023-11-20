import React from "../../_snowpack/pkg/react.js";
import {
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  Checkbox,
  FormControlLabel
} from "../../_snowpack/pkg/@material-ui/core.js";
import {useForm, useFieldArray, Controller} from "../../_snowpack/pkg/react-hook-form.js";
const dataTypes = [
  {value: "TIME", label: "TIME"},
  {value: "TIMESTAMP", label: "TIMESTAMP"},
  {value: "DATE", label: "DATE"},
  {value: "String", label: "String"},
  {value: "CHAR", label: "CHAR"},
  {value: "VARCHAR", label: "VARCHAR"},
  {value: "CLOB", label: "CLOB"},
  {value: "GRAPHIC", label: "GRAPHIC"},
  {value: "VARGRAPHIC", label: "VARGRAPHIC"},
  {value: "DBCLOB", label: "DBCLOB"},
  {value: "BLOB", label: "BLOB"},
  {value: "BOOLEAN", label: "BOOLEAN"},
  {value: "SMALLINT", label: "SMALLINT"},
  {value: "INTEGER", label: "INTEGER"},
  {value: "BIGINT", label: "BIGINT"},
  {value: "DECIMAL", label: "DECIMAL"},
  {value: "DECFLOAT", label: "DECFLOAT"},
  {value: "REAL", label: "REAL"},
  {value: "DOUBLE", label: "DOUBLE"}
];
function Form({setColumnData}) {
  const {register, control, handleSubmit, reset, trigger, setError} = useForm({
    defaultValues: {}
  });
  const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
    control,
    name: "Columns"
  });
  const onSbumit = (data) => {
    console.log(data);
    setColumnData(data);
  };
  return /* @__PURE__ */ React.createElement(Paper, {
    style: {
      padding: 16,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      margin: "5%"
    }
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit(onSbumit),
    style: {
      padding: 16,
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "3"
    }
  }, /* @__PURE__ */ React.createElement(Controller, {
    as: /* @__PURE__ */ React.createElement(TextField, {
      id: "standard-error-helper-text",
      label: "Table Name",
      defaultValue: "",
      name: `TableName`,
      ref: register(),
      helperText: ""
    }),
    name: `TableName`,
    control
  }), /* @__PURE__ */ React.createElement(Controller, {
    as: /* @__PURE__ */ React.createElement(TextField, {
      id: "standard-error-helper-text",
      label: "Table Description",
      defaultValue: "",
      name: `TableDescription`,
      ref: register(),
      helperText: ""
    }),
    name: `TableDescription`,
    control
  }), fields.map((item, index) => /* @__PURE__ */ React.createElement("div", {
    key: item.id,
    style: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row"
    }
  }, /* @__PURE__ */ React.createElement(Controller, {
    as: /* @__PURE__ */ React.createElement(TextField, {
      id: "standard-error-helper-text",
      label: "Column Name",
      defaultValue: "",
      ref: register(),
      helperText: "",
      style: {marginRight: "5px"}
    }),
    name: `Columns[${index}].columnName`,
    control,
    style: {marginRight: "5px"}
  }), /* @__PURE__ */ React.createElement(Controller, {
    as: /* @__PURE__ */ React.createElement(TextField, {
      id: "standard-error-helper-text",
      label: "Shortname",
      defaultValue: "",
      ref: register(),
      style: {marginRight: "5px"}
    }),
    name: `Columns[${index}].shortName`,
    control
  }), /* @__PURE__ */ React.createElement(FormControl, {
    style: {marginTop: "23px", marginRight: "5px"}
  }, /* @__PURE__ */ React.createElement(InputLabel, {
    id: "demo-simple-select-helper-label"
  }, "Datatype"), /* @__PURE__ */ React.createElement(Controller, {
    as: /* @__PURE__ */ React.createElement(Select, {
      labelId: "demo-simple-select-helper-label",
      id: "demo-simple-select-helper",
      ref: register()
    }, /* @__PURE__ */ React.createElement(MenuItem, {
      value: ""
    }, /* @__PURE__ */ React.createElement("em", null, "None")), dataTypes.map((dataType) => /* @__PURE__ */ React.createElement(MenuItem, {
      value: dataType.value
    }, dataType.label))),
    control,
    name: `Columns[${index}].dataType`
  }), /* @__PURE__ */ React.createElement(FormHelperText, null, "Put the right data size")), /* @__PURE__ */ React.createElement(Controller, {
    as: /* @__PURE__ */ React.createElement(TextField, {
      id: "standard-error-helper-text",
      label: "Datasize",
      style: {marginRight: "5px"},
      defaultValue: "",
      ref: register()
    }),
    name: `Columns[${index}].dataSize`,
    control
  }), /* @__PURE__ */ React.createElement(Controller, {
    as: /* @__PURE__ */ React.createElement(TextField, {
      id: "standard-error-helper-text",
      label: "Description",
      defaultValue: "",
      ref: register()
    }),
    name: `Columns[${index}].description`,
    control
  }), /* @__PURE__ */ React.createElement(FormControlLabel, {
    value: "",
    control: /* @__PURE__ */ React.createElement(Checkbox, null),
    label: "Primary Key",
    name: `Columns[${index}].primaryKey`,
    inputRef: register
  }), /* @__PURE__ */ React.createElement(FormControlLabel, {
    value: "",
    control: /* @__PURE__ */ React.createElement(Checkbox, null),
    label: "Unique Key",
    name: `Columns[${index}].uniqueKey`,
    inputRef: register
  }), /* @__PURE__ */ React.createElement(Button, {
    type: "Button",
    color: "secondary",
    variant: "contained",
    onClick: () => remove(index),
    style: {marginLeft: "15px", marginTop: "19px"}
  }, "Delete"))), /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      marginTop: "30px"
    }
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "Button",
    color: "primary",
    variant: "contained",
    onClick: () => append({}),
    style: {
      marginRight: "5px"
    }
  }, "New Column"), /* @__PURE__ */ React.createElement(Button, {
    type: "Button",
    color: "primary",
    type: "submit",
    variant: "contained"
  }, "Generate"))));
}
export default Form;
