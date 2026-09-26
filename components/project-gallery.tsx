"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const opener = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    if (selected === null) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelected((value) =>
          value === null ? null : (value + 1) % images.length,
        );
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelected((value) =>
          value === null ? null : (value - 1 + images.length) % images.length,
        );
      }
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [selected, images.length]);
  return (
    <div>
      <div className="gallery-heading">
        <h2>The project, in detail.</h2>
        <p>Site documentation, planning studies, and design references.</p>
      </div>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <div className="gallery-grid">
          {images.map((image, index) => (
            <button
              key={image}
              className="gallery-item"
              onClick={(event) => {
                opener.current = event.currentTarget;
                setSelected(index);
              }}
              aria-label={`Enlarge ${title}, image ${index + 1}`}
            >
              <div className="gallery-image">
                <Image
                  src={image}
                  alt={`${title} — project image ${index + 1}`}
                  fill
                  sizes="(max-width: 760px) 50vw, 33vw"
                />
              </div>
              <span>
                {String(index + 1).padStart(2, "0")} / Project documentation
              </span>
            </button>
          ))}
        </div>
        <DialogContent
          className="lightbox"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            opener.current?.focus();
          }}
        >
          <DialogTitle className="sr-only">
            {title} — project gallery
          </DialogTitle>
          <DialogDescription className="sr-only">
            Use the arrow buttons or left and right arrow keys to browse. Press
            Escape to close.
          </DialogDescription>
          {selected !== null && (
            <>
              <Image
                src={images[selected]}
                alt={`${title} — project image ${selected + 1}`}
                width={1400}
                height={1000}
                className="lightbox-image"
              />
              <div className="lightbox-controls">
                <button
                  className="icon-button"
                  aria-label="Previous image"
                  onClick={() =>
                    setSelected((selected - 1 + images.length) % images.length)
                  }
                >
                  <ChevronLeft size={18} />
                </button>
                <span aria-live="polite">
                  {selected + 1} / {images.length}
                </span>
                <button
                  className="icon-button"
                  aria-label="Next image"
                  onClick={() => setSelected((selected + 1) % images.length)}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
