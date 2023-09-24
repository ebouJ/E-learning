import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

interface IPanelProps {
  form: any;
  open?: boolean;
  headerTitle: string;
  submitButtonText: string;
  cancelButtonText?: string;
  headerDescription: string;
  children: React.ReactNode;
  isSubmitDisabled?: boolean;
  triggerElement: React.ReactNode;
  onSubmit: (values: any) => void;
  onOpenChange?: (val: boolean) => void;
}

const Panel: React.FC<IPanelProps> = ({
  open,
  form,
  children,
  onSubmit,
  headerTitle,
  onOpenChange,
  triggerElement,
  submitButtonText,
  headerDescription,
  cancelButtonText = 'Cancel',
  isSubmitDisabled = false,
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>{triggerElement}</SheetTrigger>
      <SheetContent className='flex flex-col md:w-[785px] w-full text-white dark bg-[#381D74]  md:box-border sm:max-w-none items-center overflow-auto'>
        <SheetHeader>
          <SheetTitle className='text-13xl'>{headerTitle}</SheetTitle>
          <SheetDescription>{headerDescription}</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full flex flex-col gap-4 p-4 justify-between'
          >
            <div>{children}</div>
            <SheetFooter className='w-full pb-10 pt-10 flex gap-5'>
              <SheetTrigger asChild>
                <Button className='flex w-[255px] font-bold h-[72px] flex-row items-center justify-center gap-[4px] py-[23px] px-[24px] rounded-31xl '>
                  {cancelButtonText}
                </Button>
              </SheetTrigger>
              <Button
                disabled={isSubmitDisabled}
                type={'submit'}
                variant={'courseAppBtn'}
                className={`flex w-[225px] font-bold h-[72px] flex-col justify-center items-center gap-[16.428px] rounded-31xl `}
              >
                {submitButtonText}
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default Panel;
