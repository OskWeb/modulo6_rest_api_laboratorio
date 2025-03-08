import React from "react"
import { LocationResultsEntityVM } from "./location-collection.vm"
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { Pagination } from '@mui/material';

interface Props {
  locationCollection: LocationResultsEntityVM[];
  count: number;
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const LocationCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {

  const { locationCollection, count, page, handleChange } = props;

  React.useEffect(() => {
    console.log(locationCollection);
  }, [locationCollection])

  return (
    <div>
      <h2>Lugares</h2>
      {
        locationCollection ? (
          <div>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Type</TableCell>
                    <TableCell align="right">Dimension</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {locationCollection.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.type}</TableCell>
                      <TableCell align="right">{row.dimension}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              siblingCount={0}
              sx={{
                display: 'flex',
                justifyContent: 'end'
              }}
            />
          </div>


        ) : (
          ""
        )
      }
    </div>
  )
}
