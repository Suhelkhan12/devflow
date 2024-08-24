"use client";
import React, { useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { createQuestion } from "@/actions/question.action";

import { Editor } from "@tinymce/tinymce-react";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { useForm } from "react-hook-form";
import { Badge } from "../ui/badge";

// for editing and asking a question type
const type: any = "create";

// props
interface Props {
  mongoUserId: string;
}

const QuestionForm = ({ mongoUserId }: Props) => {
  const router = useRouter();
  const path = usePathname();

  const editorRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof QuestionFromSchema>>({
    resolver: zodResolver(QuestionFromSchema),
    defaultValues: {
      title: "",
      explaination: "",
      tags: [],
    },
  });

  async function onSubmit(values: z.infer<typeof QuestionFromSchema>) {
    setIsSubmitting(true);
    try {
      await createQuestion({
        title: values.title,
        explaination: values.explaination,
        tags: values.tags,
        author: JSON.parse(mongoUserId),
        path,
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }

    form.reset();
  }

  // for hanlding tags input
  const handleInputKeydown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();

      // getting whole tag input element
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();

      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Must be less than 15 characters",
          });
        }

        // for tags who does exist on field
        // taki do same tags na add ho
        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        }
      } else {
        form.trigger();
      }
    }
  };

  // for deleting tag
  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((t: string) => t !== tag);
    form.setValue("tags", newTags);
  };

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
                    apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                    onInit={(evt, editor) => {
                      // @ts-ignore
                      editorRef.current = editor;
                    }}
                    onBlur={field.onBlur}
                    onEditorChange={(content) => field.onChange(content)}
                    initialValue=""
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "codesample",
                        "fullscreen",
                        "inser,tdatetime",
                        "media",
                        "table",
                      ],

                      toolbar:
                        "undo redo | " +
                        " codesample bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Inter; font-size:16px }",
                    }}
                  />
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
                <>
                  <Input
                    className="no-focus paragraph-regular background-light800_dark400 light-border-2 text-dark300_light700 min-h-[56px]"
                    placeholder="Add tags..."
                    onKeyDown={(e) => handleInputKeydown(e, field)}
                  />
                  {field.value.length > 0 && (
                    <div className="flex-start mt-2.5 gap-2.5">
                      {field.value.map((tag) => (
                        <Badge
                          key={tag}
                          onClick={() => {
                            handleTagRemove(tag, field);
                          }}
                          className=" subtle-medium background-light800_dark300 text-light400_light500 flex items-center justify-center gap-2 rounded-md border-none px-4 py-2 capitalize"
                        >
                          {tag}
                          <Image
                            src="/assets/icons/close.svg"
                            alt="cross"
                            width={12}
                            height={12}
                            className="cursor-pointer object-contain invert-0 dark:invert"
                          />
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </FormDescription>
              <FormMessage className=" text-red-500" />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className="primary-gradient w-fit !text-light-900"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>{type === "edit" ? "Editing..." : "Posting..."}</>
            ) : (
              <>{type === "edit" ? "Edit question" : "Ask a question"}</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
