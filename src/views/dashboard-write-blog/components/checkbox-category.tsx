import { Checkbox } from '@dentist/components/ui/checkbox'
import { Label } from '@dentist/components/ui/label'

export const CheckboxCategory = ({label, id} : { label: string, id: string }) => {
  return (
    <div className='flex items-center space-x-3'>
      <Checkbox id={id} />
      <Label
        htmlFor={id}
      >
        {label}
      </Label>
    </div>
  )
}
