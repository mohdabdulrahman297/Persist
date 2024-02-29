import { Button, FileInput, Select, TextInput, Textarea } from "flowbite-react";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">
        Your Recipe, Your Way!
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Category</option>
            <option value="vegeterian">Vegetarian</option>
            <option value="Desserts">Desserts</option>
            <option value="breakfast">Breakfast</option>
            <option value="starter">Starter</option>
            <option value="seafood">Seafood</option>
            <option value="miscellanous">Miscellanous</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-100 p-3">
          <FileInput type="file" accept="image/*" />
          <Button
            type="button"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
            size="sm"
            outline
          >
            Upload image
          </Button>
        </div>
        <Textarea
          theme="snow"
          placeholder="Add your recipe steps here..."
          className="h-72 mb-12"
          required
        />
        <Button
          type="submit"
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
