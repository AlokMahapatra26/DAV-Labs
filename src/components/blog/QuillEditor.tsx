"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

interface QuillEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export function QuillEditor({ value, onChange, placeholder }: QuillEditorProps) {
    const ReactQuill = useMemo(
        () =>
            dynamic(() => import("react-quill-new"), {
                ssr: false,
                loading: () => (
                    <div className="h-64 w-full rounded-xl border border-border/60 bg-muted/20 animate-pulse flex items-center justify-center text-muted-foreground text-sm">
                        Loading Rich Text Editor...
                    </div>
                ),
            }),
        []
    );

    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ color: [] }, { background: [] }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    ["link", "image"],
                    ["clean"],
                ],
            },
        }),
        []
    );

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "color",
        "background",
        "list",
        "blockquote",
        "code-block",
        "link",
        "image",
    ];

    return (
        <div className="quill-editor-wrapper text-foreground">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                placeholder={placeholder || "Write your blog content here..."}
            />
        </div>
    );
}
