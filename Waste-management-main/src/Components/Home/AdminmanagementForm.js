import React, { useState } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import "./Adminmanagementform.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
             
        },
    },
};

const names = [
    'Rahul' ,
   ' Prashant',
    'Ravi',
    'Tarun',

    'Garvit',
    'Jairaj',
    'Santosh',
    'Raj',
    'Kashish',
    'Shruti',
    'Hemendra',
    
    'Arvind',
    
   ' Shree'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

function Adminmanagementform() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        // console.log(event.target.value);
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            // typeof value === 'string' ? value.split(',') : value,
            event.target.value
        );
    };



    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setemail] = useState(" ");
    const [Adharno, setAdhar] = useState("");
    const [currentAddress, setcurrentAddress] = useState("");
    const [PermanentAddress, setpermanentAddress] = useState("");
    const [Dob, setDob] = useState("");
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    

    
    const userprofileSubmitFunc = (e) => {
        e.preventDefault();
        alert("upadated successfully")
    }






    return (
        <div className='home'>
            <Sidebar />
            <div className='home-container'>
                <Navbar />
                <div className='user-container'>
                    <div className='user-data-container'>





                        <h3 className='edit-profile-head'>Add Admin</h3>


                        <div className='acount-informatiion'>






                            <form className='acount-informatiion' onSubmit={userprofileSubmitFunc}>

                                <div>
                                    <FormControl sx={{ m: 1, width: 300 }}>
                                        <InputLabel id="demo-multiple-chip-label" >Add</InputLabel>
                                        <Select
                                            labelId="demo-multiple-chip-label"
                                            id="demo-multiple-chip"
                                            multiple
                                            value={personName}
                                            onChange={handleChange}
                                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                            renderValue={(selected) => (
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                    {selected.map((value) => (
                                                        <Chip key={value} label={value} />
                                                    ))}
                                                </Box>
                                            )}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map((name) => (
                                                <MenuItem
                                                    key={name}
                                                    value={name}
                                                    style={getStyles(name, personName, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>



                                <h3>Create Password</h3>

                                <TextField
                                    value={Firstname}
                                    className='input-fields-user-profile'
                                    id="standard-basic"
                                    label="Firstname"
                                    variant="standard"
                                    type="text"
                                    required
                                    onChange={(e) => setFirstname(e.target.value)} />

                                <br />





                                <TextField
                                    value={Lastname}
                                    className='input-fields-user-profile'
                                    id="standard-basic"
                                    label="Lastname"
                                    variant="standard"
                                    type="text"
                                    required
                                    onChange={(e) => setLastname(e.target.value)} />
                                <br />



                                <TextField
                                    value={email}
                                    className='input-fields-user-profile'
                                    id="standard-basic"
                                    label="Email"
                                    variant="standard"
                                    type="email"
                                    required
                                    onChange={(e) => setemail(e.target.value)} />

                                <br />




                                <h3 className='Account-info-head'>Employee Address</h3>

                                <TextField
                                    value={PermanentAddress}
                                    className='input-fields-user-profile'
                                    id="standard-basic"
                                    label="Permanent Address"
                                    variant="standard"
                                    type="text"
                                    required
                                    onChange={(e) => setpermanentAddress(e.target.value)} />
                                <br />

                                <TextField
                                    value={currentAddress}
                                    className='input-fields-user-profile'
                                    id="standard-basic"
                                    label="Current Address"
                                    variant="standard"
                                    type="text"
                                    required
                                    onChange={(e) => setcurrentAddress(e.target.value)} />
                                <br />

                                <h3>Employee personal ID.</h3>

                                <TextField
                                    value={Adharno}
                                    className='input-fields-user-profile'
                                    id="standard-basic"
                                    label="Adhar Number"
                                    variant="standard"
                                    type="number"
                                    // height="20px"
                                    // width="50px"
                                    required
                                    onChange={(e) => setAdhar(e.target.value)} />


                                <h3>Date of birth</h3>

                                <TextField
                                    value={Dob}
                                    className='input-fields-user-profile'
                                    id="standard-basic"
                                    label=""
                                    variant="standard"
                                    type="date"
                                    // height="20px"
                                    // width="50px"
                                    required
                                    onChange={(e) => setDob(e.target.value)} />
                                <br />





                                <input type="submit" className="submit-btn-user"></input>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Adminmanagementform