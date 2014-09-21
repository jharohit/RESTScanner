package com.kaiju.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by jharohit on 13/6/14.
 */

@Path("/api")
public class health {

        @GET
        @Path("/health")
        @Produces(MediaType.TEXT_PLAIN)
        public Response healthCheck() {
            return Response.ok("OK")
                    .header("Accept-Encoding","gzip")
                    .header("Cache-Control","no-cache, no-store, must-revalidate ")
                    .header("Pragma","no-cache")
                    .header("Expires",-1)
                    .build();
        }


}
