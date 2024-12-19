
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const Domain = () => {
  return (
    <div className="flex flex-col space-y-1.5">
                 <Label htmlFor="framework" className="text-xl font-bold mb-2">Select Domain</Label>
                 <Select>
                   <SelectTrigger id="framework">
                     <SelectValue placeholder="Select" />
                   </SelectTrigger>
                   <SelectContent position="popper">
                     <SelectItem value="frontend">Frontend Engineer</SelectItem>
                     <SelectItem value="backend">Backend Engineer</SelectItem>
                     <SelectItem value="fullstack">Full Stack Engineer</SelectItem>
                     <SelectItem value="software">Software Engineer</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
  )
}

export default Domain