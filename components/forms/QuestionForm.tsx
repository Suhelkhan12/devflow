"use client";

import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { QuestionFromSchema } from "@/lib/validation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const QuestionForm = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const form = useForm<z.infer<typeof QuestionFromSchema>>({
    resolver: zodResolver(QuestionFromSchema),
    defaultValues: {
      title: "",
      explaination: "",
      tags: [],
    },
  });

  function onSubmit(values: z.infer<typeof QuestionFromSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-9
      "
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className=" text-dark400_light800 paragraph-medium ">
                Question title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-[1.125rem]">
                <Input
                  className="no-focus paragraph-regular background-light800_dark400 light-border-2 text-dark300_light700 min-h-[56px]"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific and imagine you’re asking a question to another
                person.
              </FormDescription>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explaination"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className=" text-dark400_light800 paragraph-medium ">
                Detailed explaination of your problem{" "}
                <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-[1.125rem]">
                <>
                  <Editor
                    apiKey="l4u4r45azaa6fx0xeihtl1t3gmjn231jigk6invgg3wxd7hb"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                      height: 500,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                  <button onClick={log}>Log editor content</button>
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </FormDescription>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className=" text-dark400_light800 paragraph-medium ">
                Question tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-[1.125rem]">
                <Input
                  className="no-focus paragraph-regular background-light800_dark400 light-border-2 text-dark300_light700 min-h-[56px]"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </FormDescription>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default QuestionForm;
