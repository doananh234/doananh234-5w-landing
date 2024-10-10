/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8U9MjlB2DGy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { ClientOnly } from 'remix-utils/client-only';
import ContactForm from '~/components/ContactForm';

export default function Component() {
  return (
    <div className="space-y-8 container mx-auto p-4">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Get in touch</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Feel free to leave any enquiries below, or give us a call to speak
          with our helpful sales team.
        </p>
      </div>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <h3 className="text-2xl font-bold">Contact Details</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {/* <div className="flex items-center space-x-2">
                <Avatar prompt="postal address" className="w-4 h-4" />
              </div> */}
              {/* <div className="flex items-center space-x-2">
                <Avatar prompt="phone number" className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </div> */}
              <div className="flex items-center space-x-2">
                <a href="mailto:reactfiber@hotmail.com">
                  reactfiber@hotmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-2xl font-bold">Leave a Message</h3>
          </CardHeader>
          <ClientOnly fallback={null}>
            {() => (
              <ContactForm/>
            )}
          </ClientOnly>
        </Card>
      </div>
    </div>
  );
}
