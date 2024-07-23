import { Checkbox } from '@dentist/components/ui/checkbox'
import { Label } from '@dentist/components/ui/label'

interface CheckboxCategoryProps { 
  label: string, 
  id: string,
  onSelectCategory: (category: { label: string, id: string }) => void
  selected: boolean
}

export const CheckboxCategory = ({label, id, onSelectCategory, selected} : CheckboxCategoryProps) => {

  return (
    <div className='flex items-center space-x-3'>
      <Checkbox 
        checked={selected} 
        id={id} 
        onCheckedChange={() => onSelectCategory({ label, id })} 
      />

      <Label
        className='cursor-pointer'
        htmlFor={id}
      >
        {label}
      </Label>
    </div>
  )
}
