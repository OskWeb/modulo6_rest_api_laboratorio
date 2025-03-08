import React from "react"
import { EpisodeResultsEntityVM } from "./episode-collection.vm"
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { Pagination } from '@mui/material';

interface Props {
  episodeCollection: EpisodeResultsEntityVM[];
  count: number;
  page: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const EpisodeCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {

  const { episodeCollection, count, page, handleChange } = props;

  React.useEffect(() => {
    console.log(episodeCollection);
  }, [episodeCollection])

  return (
    <div>
      <h2>Episodios</h2>
      {
        episodeCollection ? (
          <div>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Release Date</TableCell>
                    <TableCell align="right">Episode</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {episodeCollection.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.air_date}</TableCell>
                      <TableCell align="right">{row.episode}</TableCell>

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
