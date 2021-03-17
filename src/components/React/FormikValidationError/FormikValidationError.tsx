import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next';

interface Props {
  name: string;
  touched: { [key: string]: any | undefined };
  errors: { [key: string]: any | undefined };
  index?: number
  keyName?: string
}

function FormikValidationError(props: Props): ReactElement {
  const { name, touched, errors } = props;
  const { t } = useTranslation();

  return (
    (touched[name] && !!errors[name]) ?
      <span className='error' style={{ fontStyle: 'normal' }}> <span className='ic-error'></span> {errors[name] ? t(errors[name] as string) : ""}</span>
      :
      <></>
  )
}

export function FormikFieldArrayValidationError(props: Props): ReactElement {
  const { name, touched, errors, index, keyName } = props;
  if ((`${keyName}` in errors) && (`${keyName}` in touched) && errors[keyName!][index!]) {
    return <span className='error' style={{ fontStyle: 'normal' }}> {errors[keyName!][index!][name] && <span className='ic-error'></span>} {errors[keyName!][index!][name] as string}</span>
  }

  return <span></span>
}

export default FormikValidationError