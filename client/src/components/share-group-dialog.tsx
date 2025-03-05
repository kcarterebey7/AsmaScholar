import { QRCodeSVG } from "qrcode.react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface ShareGroupDialogProps {
  groupId: string;
  groupName: string;
}

export function ShareGroupDialog({ groupId, groupName }: ShareGroupDialogProps) {
  const shareUrl = `${window.location.origin}/relationships?group=${groupId}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Group: {groupName}</DialogTitle>
          <DialogDescription>
            Scan this QR code to view this group on another device
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center p-4">
          <QRCodeSVG
            value={shareUrl}
            size={200}
            level="H"
            includeMargin={true}
            className="bg-white p-2 rounded-lg"
          />
        </div>
        <div className="text-center text-sm text-muted-foreground mt-2">
          {shareUrl}
        </div>
      </DialogContent>
    </Dialog>
  );
}
