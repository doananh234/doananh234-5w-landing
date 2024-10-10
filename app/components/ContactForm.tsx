import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  const submit = () => {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    window.location.href = `mailto:reactfiber@hotmail.com?subject=${decodeURIComponent(
      `${name} Report`,
    )}&body=${message}`;
  };
  return (
    <CardContent>
      <div className=" flex flex-col gap-4">
        <Label htmlFor="email">Name</Label>
        <Input required id="name" placeholder="Enter your name" />
        <Label htmlFor="message">Message</Label>
        <Textarea
          required
          id="message"
          placeholder="Enter your message"
          className="min-h-[100px]"
        />
        <Button onClick={submit}>Send message</Button>
      </div>
    </CardContent>
  );
}
