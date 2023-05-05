import { Grid } from '@mui/material'
import buttonsOperatorsArray from '../utils/ButtonsOperatorsArray'

const Operators = ({
    clearResult,
    changeResultOnClickOperatots,
    countResult,
    countPercent,
    addBrackets,
    changeResultOnClickMinus,
}) => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item md={3} xs={3} className="item">
                    <button
                        className="button operator-button ac"
                        onClick={() => clearResult()}
                    >
                        AC
                    </button>
                </Grid>
                <Grid item md={3} xs={3} className="item">
                    <button
                        className="button operator-button "
                        onClick={() => addBrackets()}
                    >
                        ()
                    </button>
                </Grid>
                {buttonsOperatorsArray.map((item) => (
                    <Grid item md={3} xs={3} className="item">
                        <button
                            className="button operator-button"
                            onClick={() =>
                                changeResultOnClickOperatots(item.val)
                            }
                        >
                            {item.val}
                        </button>
                    </Grid>
                ))}
                <Grid item md={3} xs={3} className="item">
                    <button
                        className="button operator-button "
                        onClick={() => changeResultOnClickMinus('-')}
                    >
                        -
                    </button>
                </Grid>
                <Grid item md={3} xs={3} className="item">
                    <button
                        className="button operator-button "
                        onClick={() => countPercent()}
                    >
                        %
                    </button>
                </Grid>
                <Grid item md={3} xs={3} className="item">
                    <button
                        className="button operator-button "
                        onClick={() => countResult()}
                    >
                        =
                    </button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Operators
