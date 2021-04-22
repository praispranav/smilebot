import React from 'react';
import Typography from "@material-ui/core/Typography"
import DragIndicatorIcon from "@material-ui/icons/DragIndicator"

const nav = () => {
    return (
        <div>
            <div style={{background:"black",padding:"0.6em 0.5em", height:"2em", color:"white"}}>
                <span><DragIndicatorIcon  fonstSize="medium" style="background:blue"/></span><Typography variant="h5">Outlook Mail</Typography>
            </div>
        </div>
    );
}

export default nav;
