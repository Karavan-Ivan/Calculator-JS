import BackspaceIcon from '@mui/icons-material/Backspace'
import { Grid } from '@mui/material'
import buttonsNumbersArray from '../utils/ButtonsArray'

const NumbersBlock = ({ changeResultOnClick, deleteLastSumbol }) => {
    return (
        <div>
            <Grid container spacing={2}>
                {buttonsNumbersArray.map((item) => (
                    <Grid item md={3} xs={3} className="item">
                        <button
                            className="button numbers-button"
                            onClick={() => changeResultOnClick(item.val)}
                            value={item.val}
                        >
                            {item.val}
                        </button>
                    </Grid>
                ))}

                <Grid item md={3} xs={3} className="item">
                    <button
                        className="button numbers-button backspaceIcon"
                        onClick={() => deleteLastSumbol()}
                    >
                        <BackspaceIcon />
                    </button>
                </Grid>
            </Grid>
        </div>
    )
}

export default NumbersBlock
