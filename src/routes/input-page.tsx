import Input from "../components/ui/input";
function InputPage() {
  return (
    <>
      <div className="flex-col  lg:items-start lg:justify-center">
        <h1 className="text-2xl font-semibold mb-3">variant</h1>
        <div className="flex flex-col lg:flex-row gap-16">
          <div>
            <Input hoverFocus />
          </div>
          <div>
            <Input hoverFocus info="error" error />
          </div>

          <div>
            <Input info="disabled" disabled />
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-3">helper text</h1>
        <div className="flex flex-col lg:flex-row gap--1 lg:gap-16">
          <Input
            info='helperText="this is helpertext"'
            helperText="this is helpertext"
          />
          <Input
            info='helperText="this is helpertext"'
            helperText="this is helpertext"
            error
          />
        </div>

        <h1 className="text-2xl font-semibold mb-3">icon</h1>
        <div className="flex flex-col lg:flex-row gap--1 lg:gap-16">
          <div>
            <Input info="startIcon" startIcon />
          </div>
          <div>
            <Input info="endIcon" endIcon />
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-3">value</h1>
        <Input info='value="this is value"' value="this is value" />

        <h1 className="text-2xl font-semibold mb-3">size</h1>
        <div className="flex flex-col lg:flex-row gap--1 lg:gap-16">
          <Input info='size="sm"' size="sm" />
          <Input info='size="md"' size="md" />
        </div>

        <h1 className="text-2xl w-full font-semibold mb-3">full width</h1>
        <div className="w-full">
          <Input info="fullWidth" fullWidth />
        </div>

        <h1 className="text-2xl font-semibold mb-3">multiline</h1>
        <Input info='multiline row="4"' row={4} />
      </div>
    </>
  );
}
export default InputPage;
