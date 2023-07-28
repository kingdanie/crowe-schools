"use strict";var WPFormsRichTextField=window.WPFormsRichTextField||function(n,t,o){var e={mediaPostIdUpdateEvent:!1},d={init:function(){o(n).on("wpformsReady",d.customizeRichTextField)},customizeRichTextField:function(){var i=o(n);i.on("tinymce-editor-setup",function(e,t){d.addMediaButton(t),t.on("keyup",function(){d.validateRichTextField(t)})}),i.on("wpformsRichTextContentChange",function(e,t,i){d.validateRichTextField(i),d.enableAddMediaButtons(t)}),i.on("tinymce-editor-init",function(e,t){t.getDoc().body.style.fontFamily=o("body").css("font-family"),d.mediaPostIdUpdate(),d.observeEditorChanges(t),i.trigger("wpformsRichTextEditorInit",[t])}),i.on("elementor/popup/show",function(e,t,i){d.reInitRichTextFields(i.$element)}),o("textarea.wp-editor-area").each(function(){var e=o(this);e.hasClass("wpforms-field-required")&&e.prop("required",!0)}),i.on("click",".media-modal-close, .media-modal-backdrop",d.enableAddMediaButtons),wp.media&&wp.media.view.Modal.prototype.on("escape",function(){d.enableAddMediaButtons("escapeEvent")})},addMediaButton:function(e){wpforms_settings.richtext_add_media_button&&e.addButton("wp_add_media",{tooltip:"Add Media",icon:"dashicon dashicons-admin-media",cmd:"WP_Medialib"})},enableAddMediaButtons:function(e){("escapeEvent"===e||d.isCloseEvent(e)||d.isMutationImage(e))&&o(".mce-btn-group button i.dashicons-admin-media").closest(".mce-btn").removeClass("mce-btn-disabled")},isCloseEvent:function(e){return void 0!==e.target&&(e.target.classList.contains("media-modal-icon")||e.target.classList.contains("media-modal-backdrop"))},isMutationImage:function(e){if(void 0===e.addedNodes||void 0===e.addedNodes[0])return!1;var t=!1;return e.addedNodes.forEach(function(e){return"IMG"===e.tagName||"A"===e.tagName&&e.querySelector("img")?!(t=!0):void 0}),t},disableAddMediaButtons:function(){o(".mce-btn-group button i.dashicons-admin-media").closest(".mce-btn").addClass("mce-btn-disabled")},mediaPostIdUpdate:function(){e.mediaPostIdUpdateEvent||(o(".wpforms-field-richtext-media-enabled .mce-toolbar .mce-btn").on("click",function(e){var t,e=o(e.target);!e.hasClass("dashicons-admin-media")&&0===e.find(".dashicons-admin-media").length||(t=e.closest("form").data("formid"),e=e.closest(".wpforms-field-richtext").data("field-id"),wp.media.model.settings.post.id="wpforms-"+t+"-field_"+e,d.disableAddMediaButtons())}),e.mediaPostIdUpdateEvent=!0)},observeEditorChanges:function(d){new MutationObserver(function(e,t){for(var i in e)"childList"===e[i].type&&o(n).trigger("wpformsRichTextContentChange",[e[i],d])}).observe(d.iframeElement.contentWindow.document.body,{childList:!0,subtree:!0,attributes:!0})},validateRichTextField:function(e){var t;e&&o(e.iframeElement).closest("form").data("validator")&&(t=o("#"+e.id),e.getContent()!==t.val()&&(e.save(),t.valid()))},reInitRichTextFields:function(e){e.find(".wp-editor-area").each(function(){var e=o(this).attr("id");tinymce.get(e)&&tinyMCE.execCommand("mceRemoveEditor",!1,e),t.quicktags(tinyMCEPreInit.qtInit[e]),o("#"+e).css("visibility","initial"),tinymce.init(tinyMCEPreInit.mceInit[e])})}};return d}(document,window,jQuery);WPFormsRichTextField.init();