"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ChevronRight, Users2 } from "lucide-react";
import { Input } from "./ui/input";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

function AddFriend() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data) => {
    axios.post("/api/add_friend", {
      email: "asdsadsa",
    });
  };

  return (
    <Dialog>
      <DialogTrigger className=" bg-slate-900 text-white p-2 rounded-sm flex space-x-2">
        <Users2 />
        <h1 className="text-md">Add new friend</h1>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new friend</DialogTitle>
          <DialogDescription>
            Enter someone's email to add them as your friend
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col space-y-5"
        >
          <Input
            type="email"
            placeholder="andreibolojan@gmail.com"
            {...register("email", { required: true })}
          />
          <p>{errors && "Email is worng"}</p>
          <div className="flex justify-end">
            <Button type="submit" className="flex space-x-2">
              <h1>Sent friend request</h1>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddFriend;
