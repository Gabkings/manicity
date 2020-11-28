import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import {firebasePlayers} from '../../../firebase'
import AdminLayout from '../../../Hoc/AdminLayout'
import {firebaseLooper, reverseArray} from '../../utils/minsc'
import { Link } from 'react-router-dom';
export default class Index extends Component {
    state = {
        isLoading: true,
        players : []
    }


    componentDidMount(){
        firebasePlayers.once("value").then((snapshot) =>{
            const matches = firebaseLooper(snapshot)
            this.setState({
                isLoading :false, 
                players: reverseArray(matches)
            })
        })
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
                      <TableCell>First Name</TableCell>
                      <TableCell>Last name</TableCell>
                      <TableCell>Number</TableCell>
                      <TableCell>Position</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.players
                      ? this.state.players.map((player, i) => (
                          <TableRow key={i}>
                            <TableCell>
                                <Link to={`/admin_players/edit_player/${player.id}`}>
                                    {player.name}
                                </Link>
                            </TableCell>
                            <TableCell>
                            {player.lastname}
                            </TableCell>
                            <TableCell>
                              {player.number}
                            </TableCell>
                            <TableCell>
                              {player.position}
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
