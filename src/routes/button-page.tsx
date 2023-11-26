import Button from "../components/ui/button";
function ButtonPage() {
  return (
    <>
      <div className="flex-col  lg:items-start lg:justify-center">
        <h1 className="text-2xl font-semibold mb-3">variant</h1>
        <div className="flex flex-col lg:flex-row gap-16">
          <Button hoverActive />
          <Button hoverActive info='variant="text"' variant="text" />
          <Button hoverActive info='variant="outline"' variant="outline" />
        </div>
        <br />

        <h1 className="text-2xl font-semibold mb-3">disabled</h1>
        <Button info="disableShadow" disableShadow />
        <div className="flex flex-col lg:flex-row gap-16">
          <Button info="disabled" disabled />
          <Button disabled info='variant="text" disabled' variant="text" />
        </div>
        <br />

        <h1 className="text-2xl font-semibold mb-3">icon</h1>
        <div className="flex flex-col lg:flex-row gap-16">
          <Button startIcon info='startIcon="download"' />
          <Button endIcon info='endIcon="download"' />
        </div>
        <br />

        <h1 className="text-2xl font-semibold mb-3">size</h1>
        <div className="flex flex-col lg:flex-row gap-16">
          <Button info='size="sm"' size="sm" />
          <Button info='size="md"' size="md" />
          <Button info='size="lg"' size="lg" />
        </div>
        <br />

        <h1 className="text-2xl font-semibold mb-3">color</h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <Button hoverActive info='color="default"' color="default" />
          <Button hoverActive info='color="primary"' color="primary" />
          <Button hoverActive info='color="secondary"' color="secondary" />
          <Button hoverActive info='color="danger"' color="danger" />
        </div>
      </div>
    </>
  );
}

export default ButtonPage;
