import { TextField, Typography } from '@mui/material'

const DateField = ({
    title,
    isRequired,
    isDisabled,
    type,
    value,
    name,
    setDateFormat,
    typeValidation,
    daysValidation,
    dateStatus,
    errors,
    register
}) => {
    console.log('🚀 ~ value:', value)
    return (
        <>
            <TextField
                type='date'
                label={title}
                disabled={isDisabled ? true : false}
                defaultValue={value ? new Date(value).toISOString().split('T')[0] : null}
                name={name}
                aria-describedby='validation-schema-nome'
                // error={errors ? true : !dateStatus?.[type]?.status ? true : false}
                {...register(name)}
                onChange={e => {
                    setDateFormat(typeValidation, type, e.target.value, daysValidation)
                }}
                variant='outlined'
                fullWidth
                InputLabelProps={{
                    shrink: true
                }}
                inputProps={{
                    min: dateStatus[type]?.dataIni,
                    max: dateStatus[type]?.dataFim
                }}
            />
            {/* {!dateStatus?.status && (
                <Typography component='span' variant='caption' color='error'>
                    {dateStatus?.[type]?.message}
                </Typography>
            )} */}
        </>
    )
}

export default DateField
