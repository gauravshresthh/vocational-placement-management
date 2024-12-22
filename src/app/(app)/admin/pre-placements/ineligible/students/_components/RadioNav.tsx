"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { followUpSchema, type SelectFollowUp } from "../_schema/UserSchema";
import { useForm } from "@/hooks/useForm";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";

export function RadioNav() {
  const methods = useForm<SelectFollowUp>(
    {
      defaultValues: {
        type: "email",
        message: "",
      },
    },
    followUpSchema
  );

  const onSubmit = async (data: SelectFollowUp) => {
    console.log(data);
  };

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full space-y-6"
      >
        <div className="flex items-center gap-6">
          <Typography variant="p4" className="font-bold">
            New Follow up
          </Typography>
          <FormField
            control={methods.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-row items-center gap-6"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="email" />
                      </FormControl>
                      <FormLabel className="font-normal">Send Email</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="call" />
                      </FormControl>
                      <FormLabel className="font-normal">Call</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="note" />
                      </FormControl>
                      <FormLabel className="font-normal">Note</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={methods.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <Textarea
                  placeholder="Your message here"
                  className="h-[150px]"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className=" flex">
          <Button type="submit" className="py-4 px-8  rounded-md  ml-auto">
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
}
