"use client";

// import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { followUpSchema, SelectFollowUp } from "../_schema/UserSchema";
import { useForm } from "@/hooks/useForm";

export function RadioNav() {
  const methods = useForm<SelectFollowUp>(
    {
      defaultValues: {
        type: "email",
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
        className="w-2/3 space-y-6"
      >
        <FormField
          control={methods.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
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
      </form>
    </Form>
  );
}
