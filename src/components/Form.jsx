import React from 'react';
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
  FormControlLabel,
} from '@material-ui/core';
import { useForm, useFieldArray, Controller } from 'react-hook-form';

const dataTypes = [
  { value: 'TIME', label: 'TIME' },
  { value: 'TIMESTAMP', label: 'TIMESTAMP' },
  { value: 'DATE', label: 'DATE' },
  { value: 'String', label: 'String' },
  { value: 'CHAR', label: 'CHAR' },
  { value: 'VARCHAR', label: 'VARCHAR' },
  { value: 'CLOB', label: 'CLOB' },
  { value: 'GRAPHIC', label: 'GRAPHIC' },
  { value: 'VARGRAPHIC', label: 'VARGRAPHIC' },
  { value: 'DBCLOB', label: 'DBCLOB' },
  { value: 'BLOB', label: 'BLOB' },
  { value: 'BOOLEAN', label: 'BOOLEAN' },
  { value: 'SMALLINT', label: 'SMALLINT' },
  { value: 'INTEGER', label: 'INTEGER' },
  { value: 'BIGINT', label: 'BIGINT' },
  { value: 'DECIMAL', label: 'DECIMAL' },
  { value: 'DECFLOAT', label: 'DECFLOAT' },
  { value: 'REAL', label: 'REAL' },
  { value: 'DOUBLE', label: 'DOUBLE' },
];

function Form({ setColumnData }) {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: {},
    },
  );
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: 'Columns',
    },
  );

  const onSbumit = (data) => {
    console.log(data);
    setColumnData(data);
  };

  return (
    <Paper
      style={{
        padding: 16,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '5%',
      }}
    >
      <form
        onSubmit={handleSubmit(onSbumit)}
        style={{
          padding: 16,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '3',
        }}
      >
        <Controller
          as={
            <TextField
              id="standard-error-helper-text"
              label="Table Name"
              defaultValue=""
              name={`TableName`}
              ref={register()}
              helperText=""
            />
          }
          name={`TableName`}
          control={control}
        />

        <Controller
          as={
            <TextField
              id="standard-error-helper-text"
              label="Table Description"
              defaultValue=""
              name={`TableDescription`}
              ref={register()}
              helperText=""
            />
          }
          name={`TableDescription`}
          control={control}
        />

        {fields.map((item, index) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Controller
              as={
                <TextField
                  id="standard-error-helper-text"
                  label="Column Name"
                  defaultValue=""
                  ref={register()}
                  helperText=""
                  style={{ marginRight: '5px' }}
                />
              }
              name={`Columns[${index}].columnName`}
              control={control}
              style={{ marginRight: '5px' }}
            />

            <Controller
              as={
                <TextField
                  id="standard-error-helper-text"
                  label="Shortname"
                  defaultValue=""
                  ref={register()}
                  style={{ marginRight: '5px' }}
                />
              }
              name={`Columns[${index}].shortName`}
              control={control}
            />

            <FormControl style={{ marginTop: '23px', marginRight: '5px' }}>
              <InputLabel id="demo-simple-select-helper-label">
                Datatype
              </InputLabel>
              <Controller
                as={
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    ref={register()}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {dataTypes.map((dataType) => (
                      <MenuItem value={dataType.value}>
                        {dataType.label}
                      </MenuItem>
                    ))}
                  </Select>
                }
                control={control}
                name={`Columns[${index}].dataType`}
              />
              <FormHelperText>Put the right data size</FormHelperText>
            </FormControl>

            <Controller
              as={
                <TextField
                  id="standard-error-helper-text"
                  label="Datasize"
                  style={{ marginRight: '5px' }}
                  defaultValue=""
                  ref={register()}
                />
              }
              name={`Columns[${index}].dataSize`}
              control={control}
            />

            <Controller
              as={
                <TextField
                  id="standard-error-helper-text"
                  label="Description"
                  defaultValue=""
                  ref={register()}
                />
              }
              name={`Columns[${index}].description`}
              control={control}
            />
            <FormControlLabel
              value=""
              control={<Checkbox />}
              label="Primary Key"
              name={`Columns[${index}].primaryKey`}
              inputRef={register}
            />
            <FormControlLabel
              value=""
              control={<Checkbox />}
              label="Unique Key"
              name={`Columns[${index}].uniqueKey`}
              inputRef={register}
            />
            <Button
              type="Button"
              color="secondary"
              variant="contained"
              onClick={() => remove(index)}
              style={{ marginLeft: '15px', marginTop: '19px' }}
            >
              Delete
            </Button>
          </div>
        ))}

        <div
          style={{
            display: 'flex',
            marginTop: '30px',
          }}
        >
          <Button
            type="Button"
            color="primary"
            variant="contained"
            onClick={() => append({})}
            style={{
              marginRight: '5px',
            }}
          >
            New Column
          </Button>

          <Button
            type="Button"
            color="primary"
            type="submit"
            variant="contained"
          >
            Generate
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default Form;
