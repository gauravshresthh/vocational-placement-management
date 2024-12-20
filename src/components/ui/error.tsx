// import Image from "next/legacy/image";
import { useRouter } from "next/navigation";
import { Typography } from "./typography";
import { Button } from "./button";

export interface ErrorProps {
  isPage?: boolean;
  isCentered?: boolean;
  errorCode: number;

  message?: string;
  // errorTitle: string;
  // errorMessage: string;
  // errorMessageSubTitle: string;
  // errorImage: string;
}

const ERROR: Record<
  number,
  { title: string; message: string; subTitle: string; image: string }
> = {
  401: {
    title: "Unauthorized Access",
    message: "You do not have permissions to access this resource",
    subTitle:
      "If you need assistance, please contact branch admin or webssite administrator",
    image: "/401.svg",
  },
  404: {
    title: "Page Not Found",
    message: "Unfortunately, this is only a 404 page.",
    subTitle:
      "You may have mistyped the address, or the page has been moved to another URL.",
    image: "/404.svg",
  },
  403: {
    title: "Forbidden Resource",
    message:
      "You do not have permission to access the requested resource. Please contact the server administrator for more information.",
    subTitle: "",
    image: "/403.svg",
  },
  500: {
    title: "Internal Server Error",
    message:
      "The server encountered an internal error or misconfiguration and was unable to complete your request.",
    subTitle: "",
    image: "/401.svg",
  },
};

export const Error = ({
  isPage,
  isCentered,
  errorCode,
  message,
}: ErrorProps) => {
  const router = useRouter();

  return (
    <div
      {...(isPage
        ? {}
        : isCentered
        ? {
            display: "flex",
            justifyContent: "center",
            pt: "20vh",
          }
        : { pt: "120px", pl: "120px" })}
    >
      <div
        className={`flex flex-col ${
          isCentered ? "items-center" : "items-start"
        } gap-4`}
      >
        <div
          className={`flex flex-col ${
            isCentered ? "items-center" : "items-start"
          } gap-1`}
        >
          {/* <Image
            src={ERROR[errorCode]?.image}
            width="100"
            height="100"
            objectFit="contain"
            objectPosition="center"
          /> */}

          <Typography variant="d1">Error Code: {errorCode}</Typography>
          <div
            className={`flex flex-col ${
              isCentered ? "items-center" : "items-start"
            } gap-2`}
          >
            <Typography variant="d1">{ERROR[errorCode]?.title}</Typography>
            <Typography
              className={`${isCentered ? "text-center" : "text-left"}`}
            >
              {message || ERROR[errorCode]?.message}
              <br />
              <div className="inline"> {ERROR[errorCode]?.subTitle}</div>
            </Typography>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="default" onClick={() => router.back()}>
            Go Back
          </Button>
          <Button variant="outline" onClick={() => router.push("/")}>
            Get back to home page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
