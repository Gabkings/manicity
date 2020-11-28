import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { matches } from "../../../firebase";
import AdminLayout from "../../../Hoc/AdminLayout";
import { firebaseLooper, reverseArray } from "../../utils/minsc";
import { Link } from "react-router-dom";

export default class Index extends Component {
  state = {
    isLoading: true,
    matches: [],
  };

  componentDidMount() {
    matches.once("value").then((snapshot) => {
      const matches = firebaseLooper(snapshot);
      this.setState({
        isLoading: false,
        matches: reverseArray(matches),
      });
    });
  }

  render() {
    return (
      <AdminLayout>
        <div className="admin_progress">
          {this.state.isLoading ? (
            <CircularProgress thickness={7} style={{ color: "#98c5e9" }} />
          ) : (
            ""
          )}
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="Matches table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Match</TableCell>
                <TableCell>Result</TableCell>
                <TableCell>Final</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.matches
                ? this.state.matches.map((match, i) => (
                    <TableRow key={i}>
                      <TableCell>{match.date}</TableCell>
                      <TableCell>
                        <Link to={`/admin_matches/edit_match/${match.id}`}>
                          {match.away} <strong>-</strong> {match.local}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {match.resultAway} <strong>-</strong>{" "}
                        {match.resultLocal}
                      </TableCell>
                      <TableCell>
                        {match.final === "Yes" ? (
                          <span className="matches_tag_red">Final</span>
                        ) : (
                          <span className="matches_tag_green">
                            Not Yet Played
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </AdminLayout>
    );
  }
}
