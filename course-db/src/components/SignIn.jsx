import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

function SignIn(){
    return <div>
            <div style={{
                paddingTop: 15,
                marginBottom: 15,
                marginTop: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <Typography variant='h4'>Welcome back</Typography>
                <br/>
                <Typography variant='h6'>Sign In below</Typography>
            </div>

        <center>
            <Card variant = "outlined" style={{
                border: "2px solid black",
                width: "350px",
                height: "250px",
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '5px',
                padding:'30px'
            }}>
                
                <TextField id="outlined-basic" label="Email/Username" variant="outlined" type='text' fullWidth = {true} />
                <br/>
                <TextField id="outlined-basic" label="Password" variant="outlined" type='password' fullWidth = {true} />
                <br/> 
                <Button variant="contained">Sign In </Button>
            </Card>
        </center>
    </div>
}

export default SignIn; 